import express		from	 'express';
import bodyParser	from	 'body-parser';
import logger		from	 'morgan';
import cookieParser	from	 'cookie-parser';
const app	= express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

export default app;
