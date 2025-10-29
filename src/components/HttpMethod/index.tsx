import React from 'react';
import styles from './styles.module.css';

interface HttpMethodProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
}

const HttpMethod: React.FC<HttpMethodProps> = ({ method }) => {
  return (
    <span className={`${styles.httpMethod} ${styles[method.toLowerCase()]}`}>
      {method}
    </span>
  );
};

export default HttpMethod;