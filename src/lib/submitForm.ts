// Sends the quote form to Buckland's inbox through Web3Forms, on Robert's paid account.
// The inbox is whichever email the access key was created for.
// Web3Forms keys are public by design (they always end up in the page), so it lives here.
// TODO: create a Buckland key in Robert's Web3Forms account and paste it below. Until then the
// form shows an error instead of sending. Never reuse another client's key.
const WEB3FORMS_ACCESS_KEY = '';

export async function submitToWeb3Forms(fields: Record<string, string>): Promise<void> {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('The quote form isn’t connected yet. Please call or email us instead.');
  }

  let result: { success?: boolean; message?: string };
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      // replyto lets Buckland hit Reply and answer the customer directly.
      // botcheck is Web3Forms' spam trap; real visitors never fill it.
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...(fields.email ? { replyto: fields.email } : {}),
        botcheck: '',
        ...fields,
      }),
    });
    result = await response.json();
  } catch {
    throw new Error('We couldn’t reach the server. Check your connection and try again.');
  }

  if (!result.success) {
    throw new Error(result.message || 'Your request didn’t go through. Please try again.');
  }
}
