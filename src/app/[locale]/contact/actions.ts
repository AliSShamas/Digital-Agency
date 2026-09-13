'use server';

import {getTranslations} from 'next-intl/server';

export interface ContactFormState {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  locale: string,
  previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const t = await getTranslations({locale, namespace: 'ContactPage.feedback'});

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
      message: t('invalidData')
    };
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return {
      success: false,
      message: t('requiredFields')
    };
  }

  if (!email.includes('@')) {
    return {
      success: false,
      message: t('invalidEmail')
    };
  }

  console.log('Contact form submitted:', {
    name,
    email,
    message
  });

  return {
    success: true,
    message: t('success')
  };
}
