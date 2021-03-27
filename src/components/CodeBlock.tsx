import React, { PureComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockPropType {
    value:string;
    language: string;
}
class CodeBlock extends PureComponent<CodeBlockPropType> {
  
  // static defaultProps = {
    // language: null
  // };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={dark}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
