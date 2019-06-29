import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const { exec } = require("child_process");

export default new Vuex.Store({
  state: {
    //TODO: make this get path from a config file.
    binary: '"./bin/youtube-dl"',
    params: new Array(),
    events: new Array(),
    links: new Array()
  },
  mutations: {
    setParams(context, args) {
      const params = args.params.split(" ");
      context.params = params;
      //console.log(context.params);
      console.log("Params Set!  :" + context.params);
    },

    getLink(context, args) {
      const links = args.params.split(" ");
      context.links = links;
      console.log(context.links);
    }
  },
  actions: {
    updateBin(context) {
      console.log("Updating youtube-dl binary..."),
        exec(context.state.binary + " " + "-U", (err, stdout, stderr) => {
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
    testCall(context) {
      //console.log(context);

      console.log(
        "Launching youtube-dl with parameters: " +
          context.state.params.join(" ") +
          context.state.links.join(" ")
      );
      exec(
        context.state.binary + " " + context.state.links.join(" "),
        +context.state.params.join(" "),
        (err, stdout, stderr) => {
          if (err) {
            console.error(err.toString());
            return;
          }

          // push to event log
          context.state.events.push(stdout, stderr);

          console.log(stdout);
          console.log(stderr);
        }
      );
    }
  }
});
