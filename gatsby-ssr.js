const React = require("react")

exports.onRenderBody = ({setPostBodyComponents}) => {
  setPostBodyComponents([
    //<script key="1" src={'js/plugins/plugins.js'} type="text/javascript" />,
    <script type="text/javascript" src={"https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"}/>,
    <script type="text/javascript" src={"scripts.js"}/>
  ]);
};