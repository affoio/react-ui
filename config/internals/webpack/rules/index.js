import javascript from './javascript';
import fonts from './fonts';
import media from './media';

export default isDev => [...javascript(isDev), ...fonts(isDev), ...media(isDev)];
