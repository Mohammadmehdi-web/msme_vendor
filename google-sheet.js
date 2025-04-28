// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const formData = new FormData(this);
    
//     // Convert FormData into a plain object
//     const formObject = {};
//     formData.forEach((value, key) => {
//         formObject[key] = value;
//     });

//     // Send the data to Google Sheets via Google Apps Script
//     fetch('https://script.google.com/macros/s/AKfycbzNZh2SaGerkS-hx-QFgwsUQA_ReqK_j6r8nir_Ju3Grzt9nJIXJVWlyT7uZFDqlIvs/exec', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json' // Important to set correct header
//         },
//         body: JSON.stringify(formObject),
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert("Form submitted successfully!");
//         // Reset the form after successful submission
//         document.getElementById('form').reset();
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert("There was an error submitting the form. Please try again.");
//     });
// });


{/* <div class="applicant-id-section">
    <div class="left">
      APPLICANT ID:
      <input type="text" class="form-control d-inline-block w-auto" required>
    </div>
    <div class="right">
      (OFFICE USE)
    </div>
  </div> */}
