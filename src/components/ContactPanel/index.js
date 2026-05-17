import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

const email = 'raghusawant786@gmail.com';

export default function ContactPanel() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Hi Raghunath,\n\n${form.message || 'I would like to discuss a QA automation opportunity.'}\n\nName: ${form.name}\nCompany: ${form.company}`
    );

    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [form]);

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const copyEmail = async () => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className={styles.contactPanel} aria-label="Contact form">
      <div className={styles.contactHeader}>
        <p className={styles.eyebrow}>Start a Conversation</p>
        <h2 className={styles.title}>Tell me what quality challenge you want to solve</h2>
      </div>

      <div className={styles.formGrid}>
        <label className={styles.field}>
          Name
          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Your name"
          />
        </label>

        <label className={styles.field}>
          Company or role
          <input
            type="text"
            value={form.company}
            onChange={(event) => updateField('company', event.target.value)}
            placeholder="Company, team, or role"
          />
        </label>

        <label className={`${styles.field} ${styles.fullWidth}`}>
          Message
          <textarea
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Automation framework, BDD setup, API testing, leadership, consulting..."
            rows={5}
          />
        </label>
      </div>

      <div className={styles.actions}>
        <a className={styles.primaryAction} href={mailtoHref}>
          Open email draft
        </a>
        <button type="button" className={styles.secondaryAction} onClick={copyEmail}>
          {copied ? 'Email copied' : 'Copy email'}
        </button>
      </div>
    </section>
  );
}
