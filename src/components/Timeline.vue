<template>
<div class="wrapper">
  <div class="container">
    <div class="timeline-item" date-is="2017-2018">
      <h2>Self-teach programming and begin working on personal projects</h2>
      <p>From 2017 onwards began casually learning web development (FreeCodeCamp) and Computer programming (Revature online curriculum - Java) more intensively. As my enthusiasm grew I began to devote more and more of my time, also exploring frameworks including Node/Express.js, and React, and began to work on tangible projects. Also completed the FCC Full-stack Web Certification.</p>
    </div>

    <div class="timeline-item" date-is="2015-2016">
      <h2>Left to Study an MBA</h2>
      <p>After over 4 years working as a financial analyst then finance manager across London and Brighton, left Amex to embark on an MBA at London Business School, looking to explore my broader interests and identify a new career path.</p>
    </div>

    <div class="timeline-item" date-is="2010-2011">
      <h2>Started Work in Financial Analysis</h2>
      <p>After flirting with the idea of academia (as a quantitative research assistant where I had my first exposure to a command line interface via Stata), went on to join American Express as a financial analyst in London.</p>
    </div>

    <div class="timeline-item" date-is="2008-2009">
      <h2>Completed Bachelors' and Masters' Degrees in Economics</h2>
      <p>Studied Economics and Natural Sciences at Trinity College, Cambridge, followed by a MSc in Development Economics at SOAS.</p>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald|Roboto:400,700");

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
}

h2 {
  font-size: 1.2rem;
  font-weight: bold;
}

.container {
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
}

.timeline-item {
  padding: 2em;
  // padding: 3em 2em 2em;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  border-left: 2px solid rgba(0, 0, 0, 0.3);
}
.timeline-item::before {
  content: attr(date-is);
  position: absolute;
  left: 2em;
  font-weight: bold;
  top: 1em;
  display: block;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.785rem;
}
.timeline-item::after {
  width: 10px;
  height: 10px;
  display: block;
  top: 1em;
  position: absolute;
  left: -7px;
  border-radius: 10px;
  content: "";
  border: 2px solid rgba(0, 0, 0, 0.3);
  background: white;
}
.timeline-item:last-child {
  border-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0)
    )
    1 100%;
}
</style>

<script>
export default {
  name: 'Timeline'
}
</script>
