import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const { exec } = require("child_process");

export default new Vuex.Store({
  state: {
    //TODO: make this get path from a config file.
    binary: '"./bin/youtube-dl.exe"',
    simpleUI: true,
    params: new Array(),
    events: new Array(),
    links: new Array()
  },
  mutations: {
    setParams(context, args) {
      const params = args.params.split(" ");
      context.params = params;
      //console.log(context.params);
      console.log("Params Set!  :" + context.params.toString());
    },

    getLink(context, args) {
      const links = args.params.split(" ");
      context.links = links;
      console.log(context.links);
    },

    addEvent(context, args) {
      //TODO: Implement lol


      
      /*const event = {
        type: 'STDOUT',
        message: 'this is an event.',
        origin: 'hell',
      }*/
    },
  },
  actions: {
    updateBin(context) {
      console.log("Updating youtube-dl binary..."),
        //exec(context.state.binary + " " + "-U", (err, stdout, stderr) => {
        exec(`"${context.state.binary}" -U`, (err, stdout, stderr) => {
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
    }
  }
});
