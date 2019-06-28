<template>
  <div class="wrapper">
    <div class="frame">

      <Project
        name="GitHub Stats"
        img="ghstats.png"
        visit="https://ghstats-arty.herokuapp.com/"
        desc="Example GitHub API Data Visualisation Dashboard."
        tools="ReactJS, GraphQL/Apollo, D3js, OAuth (with Node.js and Webpack), with additional Webtask.io serverless endpoint"
        source="https://github.com/artysidorenko/ghstats"
      ></Project>

      <Project
        name="VotyMcVoteFace"
        img="voty.png"
        visit="https://votymcclient.herokuapp.com/#/"
        desc="WebApp in two parts - React/Redux client connected to a separate server (hosted
                separately on https://votymcvoteface.herokuapp.com). Simulates a series of head-to-head votes, in which multiple
                clients can connect to the server to participate jointly in voting with live updates."
        tools="ReactJS, Redux, Socket.io (with Node.js and ejected Webpack)"
        source="https://github.com/artysidorenko/Votymcvoteface"
      ></Project>

      <Project
        name="Drum Machine Simulator"
        img="DrumMachine.png"
        visit="https://drum-machine-pj-webpack.netlify.com/"
        desc="Basic React.js Drum Machine Simulator."
        tools="ReactJS standalone (with Node.js and ejected Webpack)"
        source="https://github.com/artysidorenko/DrumMachine_webpack"
      ></Project>

      <Project
        name="Markdown Previewer"
        img="MarkdownProject.png"
        visit="https://markdown-preview-pj.netlify.com/"
        desc="Basic React.js Markdown Previewer."
        tools="ReactJS standalone (with Node.js and ejected Webpack)"
        source="https://github.com/artysidorenko/markdown-preview"
      ></Project>

    </div>
  </div>
</template>

<script>
import Project from './ProjectTemplate/Project'
export default {
  name: 'ReactExamples',
  components: { Project }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.frame {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 80vh;
  max-width: 900px;
  margin: auto;
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 1.1rem;
  }
  .frame {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 15px;
    grid-gap: 15px 15px;
    height: auto;
  }
}
</style>
