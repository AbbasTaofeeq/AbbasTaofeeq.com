export function ContactForm() {
  return (
    <form className="contact-panel grid gap-5" action="mailto:abbastaofeeq.001@gmail.com" method="post">
      <div>
        <p className="font-display text-2xl font-semibold">Start a conversation</p>
        <p className="mt-2 text-sm leading-6 text-white/54">
          Send a quick note about the role, product, or collaboration you have
          in mind.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} placeholder="Tell me about the role, project, or product goal." />
      </div>
      <button className="btn-primary w-fit" type="submit">
        Send Message
      </button>
    </form>
  );
}
