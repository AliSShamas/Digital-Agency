'use server';

export interface ContactFormState {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return {
      success: false,
      message: 'Invalid form data.'
    };
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return {
      success: false,
      message: 'Please fill in all fields.'
    };
  }

  if (!email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    };
  }

  console.log('Contact form submitted:', {
    name,
    email,
    message
  });

  return {
    success: true,
    message: 'Message sent successfully.'
  };
}