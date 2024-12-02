// Function to open the modal
function openModal() {
  document.getElementById("apply-modal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("apply-modal").style.display = "none";
  // Reset form and thank you message when the modal is closed
  resetForm();
}

// Close modal if the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target === document.getElementById("apply-modal")) {
    closeModal();
  }
};

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the page from reloading

  // Hide the form and show the thank you message
  document.getElementById("job-application-form").style.display = "none";
  document.getElementById("thank-you-message").style.display = "block";
}

// Reset the form and thank you message when modal is closed
function resetForm() {
  document.getElementById("job-application-form").style.display = "block";
  document.getElementById("thank-you-message").style.display = "none";
  document.getElementById("job-application-form").reset();
}
