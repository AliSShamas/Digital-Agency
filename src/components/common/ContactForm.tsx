'use client';

import {useActionState, useEffect, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';

import {
  submitContactForm,
  type ContactFormState
} from '@/app/[locale]/contact/actions';

const initialState: ContactFormState = {
  success: false,
  message: ''
};

const emptyValues = {
  name: '',
  email: '',
  message: ''
};

export default function ContactForm() {
  const locale = useLocale();
  const t = useTranslations('ContactPage');

  const [values, setValues] = useState(emptyValues);

  const [state, formAction, pending] = useActionState(
    submitContactForm.bind(null, locale),
    initialState
  );

  useEffect(() => {
    if (state.success) {
      setValues(emptyValues);
    }
  }, [state.success]);

  return (
    <form
      action={formAction}
      className="space-y-7 rounded-2xl border border-stone-200 bg-stone-50/70 p-6 text-stone-950 sm:p-10 dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-50"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
        >
          {t('form.name')}
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              name: event.target.value
            }))
          }
          className="min-h-12 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-start text-base text-stone-950 transition-colors focus:border-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50 dark:focus:border-indigo-400 dark:focus:outline-indigo-400"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
        >
          {t('form.email')}
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              email: event.target.value
            }))
          }
          className="min-h-12 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-start text-base text-stone-950 transition-colors focus:border-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50 dark:focus:border-indigo-400 dark:focus:outline-indigo-400"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
        >
          {t('form.message')}
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              message: event.target.value
            }))
          }
          className="min-h-40 w-full resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 text-start text-base leading-7 text-stone-950 transition-colors focus:border-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50 dark:focus:border-indigo-400 dark:focus:outline-indigo-400"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/15 transition-colors enabled:hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 disabled:cursor-wait disabled:opacity-60 sm:w-auto dark:bg-indigo-500 dark:enabled:hover:bg-indigo-400"
      >
        {pending ? t('form.sending') : t('form.submit')}
      </button>

      {state.message && (
        <p
          role={state.success ? 'status' : 'alert'}
          aria-live={state.success ? 'polite' : 'assertive'}
          className={
            state.success
              ? 'rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium leading-6 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300'
              : 'rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium leading-6 text-rose-800 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-300'
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
