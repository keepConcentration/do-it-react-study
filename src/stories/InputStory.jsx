import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../04/InputWithStyles";
import { action } from "@storybook/addon-actions";

storiesOf("InputWithStyles", module)
  .addWithJSX("기본 설정", () => <Input name="name" />)
  .addWithJSX("label 예제", () => <Input name="name" label="이름" />)
  .addWithJSX("onChange 예제", () => (
    <Input name="name" onChange={action("onChange 이벤트 발생")} />
  ))
  .addWithJSX("errorMessage 예제", () => (
    <Input name="name" label="이름" errorMessage="이름을 입력해주세요" />
  ));
