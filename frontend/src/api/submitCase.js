export async function submitCaseToBackend(caseData) {
  try {
    const response = await fetch('http://localhost:5000/submit-case', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(caseData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting case:', error);
    return { success: false, error: error.message };
  }
}
