import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const { exec } = require("child_process");

const os = require('os');
const binname = os.platform === 'win32' ? 'youtube-dl.exe' : 'youtube-dl';

export default new Vuex.Store({
  state: {
    //TODO: make this get path from a config file.
    binary: `"./bin/${binname}"`,
    simpleUI: true,
    customExecute: { input: "", useCurrent: true },
    params: new Array(),
    events: new Array(),
    links: new Array()
  },
  getters: {
    customExecute: state => {
      return state.customExecute;
    },

  },
  mutations: {

    // CE = customExecute
    SET_CE_INPUT: (state, value) => {
      state.customExecute.input = value;
    },

    SET_CE_USECURRENT: (state, value) => {
      state.customExecute.useCurrent = value;
    },

    getLink(context, args) {
      const links = args.params.split(" ");
      context.links = links;
      console.log(context.links);
    },

    addEvent(context, ...args) {
      //TODO: Implement lol


      
      /*const event = {
        type: 'STDOUT',
        message: 'this is an event.',
        origin: 'hell',
      }*/
    },
  },
  actions: {

    setCustomExecute: ({commit, state}, newValue) => {
      commit('SET_CE_INPUT', newValue);
      return state.customExecute.input;
    },

    setUseCurrentLinks: ({commit, state}, newValue) => {
      commit('SET_CE_USECURRENT', newValue);
      return state.customExecute.useCurrent;
    },

    updateBin(context) {
      console.log("Updating youtube-dl binary..."),
        //exec(context.state.binary + " " + "-U", (err, stdout, stderr) => {
        exec(`${context.state.binary} -U`, (err, stdout, stderr) => {
          if (err) {
            console.error(err.toString());
            return;
          }

          // push to event log
          context.state.events.push(stdout, stderr);
          console.log(stdout);
          console.log(stderr);
        });
    },

    execute(context) {
      //console.log(context);

      const links = context.state.links.join(" ");
      const params = context.state.params.join(" ");

      //console.log(`Launching youtube-dl with parameters: ${links} ${params}`);
      //console.log(`${context.state.binary} "${links}" ${params}`);

      //return;
      exec(`${context.state.binary} ${links} ${params}`, (err, stdout, stderr) => {
          
          if (err) {
            console.error(err.toString());
            context.state.events.push(err.toString());
            return;
          }

          // push to event log
          context.state.events.push(stdout, stderr);
          console.log(stdout);
          console.log(stderr);
        });
    },

    runCustom(context) {

      const state = context.state.customExecute;

      const links = state.useCurrent ? context.state.links.join(" ") : "";

      exec(`${context.state.binary} ${links} ${state.input}`, (err, stdout, stderr) => {

        if (err) {
          console.log(err.toString());
          return;
        }

        context.state.events.push(stdout, stderr);
        console.log(stdout);
        console.log(stderr);

      });

    },

  }
});
