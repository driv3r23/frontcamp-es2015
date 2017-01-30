'use strict';




import * as moment from 'moment';


function MainController($log) {
  'ngInject';

  $log.debug('Hello from main controller!');




	this.moment_version = moment.version;


}

export default MainController;
