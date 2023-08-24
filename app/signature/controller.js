const { tbl_user_signature } = require("../../models");
const Swal = require("sweetalert2");

module.exports = {
 index: async (req, res) => {
  const alertMessage = req.flash("alertMessage");
  const alertStatus = req.flash("alertStatus");
  const alertTitle = req.flash("alertTitle");
  const alert = { message: alertMessage, status: alertStatus, title: alertTitle };
  try {
   dataSignature = await tbl_user_signature.findAll();

   res.render("admin/signature/index", { alert, data: dataSignature });
  } catch (err) {
   console.log("err", err);
  }
 },

 signature: async (req, res) => {
  try {
   const { params } = req.query;
   const alertMessage = req.flash("alertMessage");
   const alertStatus = req.flash("alertStatus");
   const alertTitle = req.flash("alertTitle");
   const alert = { message: alertMessage, status: alertStatus, title: alertTitle };

   let dataSignature;
   if (params != undefined) {
    dataSignature = await tbl_user_signature.findOne({
     where: { user_signature_id: params },
    });
   }

   res.render("admin/signature/action_signature", {
    alert,
    data: dataSignature,
   });
  } catch (err) {
   console.log("err", err);
  }
 },

 addSignature: async (req, res) => {
  try {
   const { username, nopek, fungsi, position } = req.body;

   let newItem = await tbl_user_signature.create({
    username,
    nopek,
    fungsi_id: fungsi,
    position_id: position,
   });

   req.flash("alertTitle", "Sukses!");
   req.flash("alertMessage", "Success Add Category");
   req.flash("alertStatus", "success");

   res.redirect("/signature");
  } catch (err) {
   req.flash("alertMessage", `${err.message}`);
   console.log("err", err);
  }
 },

 updateSignature: async (req, res) => {
  try {
   const { id } = req.params;
   const { username, nopek, fungsi, position } = req.body;

   const id_signature = await tbl_user_signature.findByPk(id);

   if (!id_signature) return console.log("msg : ", "Data tidak ada");

   await tbl_user_signature.update(
    {
     username,
     nopek,
     fungsi_id: fungsi,
     position_id: position,
    },
    {
     where: { user_signature_id: id },
    }
   );

   req.flash("alertTitle", "Sukses!");
   req.flash("alertMessage", "Data berhasil di update");
   req.flash("alertStatus", "success");



   res.redirect("/signature");
  } catch (err) {
   console.log("err", err);
   res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
 },

 deleteSignature: async (req, res) => {
  try {
   const { id } = req.params;

   const id_signature = await tbl_user_signature.findByPk(id);

   if (!id_signature) return console.log("msg : ", "Data tidak ada");

   await id_signature.destroy();
   
   req.flash("alertTitle", "Sukses!");
   req.flash("alertMessage", "Data berhasil dihapus");
   req.flash("alertStatus", "success");

   res.redirect("/signature");
  } catch (err) {
   console.log("err", err);
  }
 },
};