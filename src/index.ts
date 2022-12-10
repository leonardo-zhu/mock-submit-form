import axios from "axios";

interface IPayload {
  proof: string;
  firstName: string;
  postCode: string;
  emailAddress: string;
}

const FROM_URL = "https://banksy.legacyofwarfoundation.com/apply.asp"

function submit(payload: IPayload) {
  const { proof, firstName, postCode, emailAddress } = payload;
  axios(FROM_URL, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: {
      proof,
      firstname: firstName,
      postcode: postCode,
      emailaddress: emailAddress,
    }
  }).then(res => {
    const {headers, data} = res;
    if (headers["content-type"] === "text/html" && typeof data === "string" && data.includes("Thank you")) {
      console.log("Submit Successfully")
    }
  })
}

submit({
  proof: "Test",
  firstName: "Leonardo",
  postCode: "Zhu",
  emailAddress: "xl.zhu@aftership.com"
})
