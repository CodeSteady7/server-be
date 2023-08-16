const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const form1Ctrl = require('../controllers/form1Ctrl');
const reportCtrl = require('../controllers/report');
const multer = require('multer');
const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
	if (file.mimetype.startsWith('image/jpeg')) {
		cb(null, true);
	} else {
		cb('invalid image file!', false);
	}
};
const uploads = multer({ storage, fileFilter });

const upload = multer({ dest: './public/data/uploads/' });
const auth = require('../middleware/auth');
const os = require('os');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});
router.put('/updateform1/:id', form1Ctrl.updateForm01);

// Endpoint User
router.post('/newakun', userCtrl.newAkun);
router.post('/login', userCtrl.login);
router.post('/logout', userCtrl.logout);

router.get('/refresh_token', userCtrl.refreshToken);
router.get('/infor', auth, userCtrl.getUser);

router.get('/getdatetime', userCtrl.datetimesTbl);

router.put('/userupdate/:id', userCtrl.updateUser);

// report
router.post('/report', reportCtrl.getReport);

router.post(
	'/img',
	uploads.single('file'),
	reportCtrl.img
	// reportCtrl.getReport
);
// images

// router.post("/img", upload.single("file"), reportCtrl.img)
router.get('/getimg', reportCtrl.getImg);
module.exports = router;
