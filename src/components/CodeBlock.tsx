import React, { PureComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {materialOceanic as CodeColor} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockPropType {
    value:string;
    language: string;
}
class CodeBlock extends PureComponent<CodeBlockPropType> {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={CodeColor}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
