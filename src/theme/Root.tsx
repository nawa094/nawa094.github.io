import React from 'react';
import Root from '@theme-original/Root';
import CVDownloadWidget from '../components/CVDownloadWidget/CVDownloadWidget';

export default function RootWrapper(props) {
  return (
    <>
      <Root {...props} />
      <CVDownloadWidget />
    </>
  );
}
