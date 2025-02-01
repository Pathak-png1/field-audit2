function handleSubmit(event) {
  event.preventDefault();  // Prevent form submission to server

  const formData = new FormData(document.getElementById("form"));
  const formObject = {};

  formData.forEach((value, key) => {
    if (key === "photos") {
      formObject[key] = Array.from(value).map(file => file.name); // Get the photo file names
    } else {
      formObject[key] = value;
    }
  });

  // Display the form data in the console
  console.log("Form Submitted:", formObject);
}

function changeForm(formType) {
  console.log("Form Type Selected:", "ra-visit",);
  console.log("Form Type Selected:", "deep-cleaning",);
  console.log("Form Type Selected:", "night-visit",);
  // You can adjust the form fields based on the formType (RA Visit, Deep Cleaning, Night Visit)
  // For example, you can show/hide specific fields based on the button clicked.
}
