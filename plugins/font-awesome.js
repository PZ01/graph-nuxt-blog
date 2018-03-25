import fontawesome from '@fortawesome/fontawesome';

import { faCompass, faClock, faTimesCircle } from '@fortawesome/fontawesome-free-regular';
import { faUserCircle, faChevronRight, faChevronLeft, faBan, faLongArrowAltRight, faShareSquare, faEnvelope, faCheck, faExclamation } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/fontawesome-free-brands';

//https://github.com/FortAwesome/vue-fontawesome/issues/14#issuecomment-351474573
fontawesome.config = {
    autoAddCss: false,
};

fontawesome.library.add(
    faCompass, 
    faClock, 
    faUserCircle, 
    faChevronLeft, 
    faChevronRight,
    faFacebook, 
    faTwitter,
    faPinterest, 
    faTimesCircle, 
    faBan,
    faLongArrowAltRight,
    faShareSquare,
    faEnvelope,
    faExclamation
);
