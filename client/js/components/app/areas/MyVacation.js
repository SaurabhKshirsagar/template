import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import globals from "components/app/globals";
import DS from "datastore";
import PathComponent from "p10-app-base_1_0/src/components/core/pathComponent";
import ConfigProvider
  from "p10-app-base_1_0/src/components/core/configprovider";
import ContextOwner from "p10-app-base_1_0/src/components/core/contextowner";
import LinkToWrapper from "p10-app-base_1_0/src/components/core/linktowrapper";
import ContextConsumer
  from "p10-app-base_1_0/src/components/core/contextconsumer";
import { navigateTo } from "p10-app-base_1_0/src/actions/navigation";
import { ReactHistory } from "p10-app-base_1_0/src/components/reacthistory";

import Area from "p10-app-base_1_0/src/components/core/area";
import Slide from "p10-app-base_1_0/src/components/core/slide";
import TextBox from "p10-app-base_1_0/src/components/core/textbox";
import Button from "p10-app-base_1_0/src/components/core/button";
import CheckBox from "p10-app-base_1_0/src/components/core/checkbox";
import Label from "p10-app-base_1_0/src/components/core/label";

class MyVacation extends ContextOwner {
  getContextVars() {
    return {
      trt: sss,
      yuyu: yuyu,
      ttt: ttt,
    };
  }
  render() {
    return (
      <Area
        mapContextToProps={($context, $globals, $params) => {
          return {};
        }}
        {...this.getContexts()}
      >

        <PathComponent
          pathname={"/MyVacation"}
          component={() => (
            <Slide
              mapContextToProps={($context, $globals, $params) => {
                return {
                  id: "Vacations",
                  title: "Vacations",
                  parentSlide: "",
                };
              }}
              {...this.getContexts()}
            >
              <TextBox
                mapContextToProps={($context, $globals, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters.",
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters.",
                      },
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                    },
                    name: "sa",
                    value: "",
                    placeholder: "Text Box",
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              /><TextBox
                mapContextToProps={($context, $globals, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters.",
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters.",
                      },
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                    },
                    name: "sa",
                    value: undefined,
                    placeholder: "Text Box",
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              /><Button
                mapContextToProps={($context, $globals, $params) => {
                  return {
                    style: {
                      backgroundColor: "#337ab7",
                      color: "black",
                      height: 40,
                      width: 260,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                      marginLeft: 4,
                    },
                    name: "Button",
                    text: "Button",
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              />
            </Slide>
          )}
          {...this.getContexts()}
        />
        <PathComponent
          pathname={"/MyVacation"}
          component={() => (
            <Slide
              mapContextToProps={($context, $globals, $params) => {
                return {
                  id: "slide1",
                  title: "slide1",
                  parentSlide: "",
                };
              }}
              {...this.getContexts()}
            >
              <CheckBox
                mapContextToProps={($context, $globals, $params) => {
                  return {
                    style: { height: 25, width: 100, margin: "4" },
                    name: "CheckBox",
                    value: true,
                    text: "Checkbox",
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              /><TextBox
                mapContextToProps={($context, $globals, $params) => {
                  return {
                    validations: {
                      required: { value: "true", message: "Required." },
                      minLength: {
                        value: "2",
                        message: "Must be at least 2 characters.",
                      },
                      maxLength: {
                        value: "6",
                        message: "Must be at most 6 characters.",
                      },
                    },
                    style: {
                      height: 25,
                      width: 200,
                      marginTop: 8,
                      marginRight: 4,
                      marginBottom: 0,
                    },
                    name: "sa",
                    value: undefined,
                    placeholder: "Text Box",
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onChange={($context, $globals, $params, value) => {
                  (function onChange(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onFocus={($context, $globals, $params, value) => {
                  (function onFocus(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                onBlur={($context, $globals, $params, value) => {
                  (function onBlur(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              /><Label
                mapContextToProps={($context, $globals, $params) => {
                  return {
                    style: {
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      height: "",
                      width: "90px",
                      margin: "4px",
                    },
                    name: "Label",
                    text: "Label",
                    dataSource: "",
                  };
                }}
                onClick={($context, $globals, $params, value) => {
                  (function onClick(
                    context = $context,
                    globals = $globals,
                    params = $params,
                    value
                  ) {})($context, $globals, $params, value);
                }}
                {...this.getContexts()}
              />
            </Slide>
          )}
          {...this.getContexts()}
        />
      </Area>
    );
  }
}
export default ContextConsumer(MyVacation);
