import React from 'react';
import renderTokens from '../util/renderTokens';
import tokenPropTypes from '../constants/tokenPropTypes';

/**
 * Renders a `fence` token.
 */
export default function Fence({ token }) {
  return (
    <pre>
      <code>
        {token.content}
      </code>
    </pre>
  );
}

Fence.propTypes = tokenPropTypes;
