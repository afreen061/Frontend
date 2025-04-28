const response_key = req.body["g-recaptcha-response"];
const secret_key = "<generated_site_key>";
const options = {
    url: https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key},
    headers: { "Content-Type": "application/x-www-form-urlencoded", 'json': true }
  try {
        const re = await request(options);
        if(!JSON.parse(re.body)['success']) {
            return res.send({ response: "Failed" });
      }
return res.send({ response: "Successful" });
      } catch (error) {
    return res.send({ response: "Failed" });
}