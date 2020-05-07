import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BodyContent from './components/BodyContent';
import HeadContent from './components/HeadContent';
import {sampleJson} from './resource/Test1';

import * as serviceWorker from './serviceWorker';
/* import { list } from './PBResources/RestAxosService';
list({resource:'virtualDomains.pbadmUserDetails'}) */

ReactDOM.render(<HeadContent {...sampleJson} />,document.getElementById('root_head'));

ReactDOM.render(<BodyContent {...sampleJson} />,document.getElementById('root'));
serviceWorker.unregister();
