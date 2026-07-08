import { createFileRoute } from "@tanstack/react-router";

const LOGO_BASE64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAGQAZADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/o3wfv2Y3W7rjbxPwaT/AJk/k5Op6jSNa+L7vZPZftHxeX5PLz/1+7utaxWIisRER3IiI7HxLznxexisRGIbiGFiZclYZWUlyVhnKsuWIZyzlyVVlVuFZVluFVWoQhRCoEmImJiYzE+BMThWYy876Y9F/ePW3/HUj3rPd1dKP8r6Y/l9T1HZvaX4uOLk8f0nzeb7Q7P/AAvicXy/rHk6k+y+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/T4Di55PeRW0T7hp93Un5Y+T7WXNyaV/m+j2b0M9XzYn5Y75/w9Bpp1pSKUiIrEYiI8D495mZzL3laVrWIrGIahzXWahhZSXJVlKJclWUqS5KqSpLlqpKktxCJVluFUKhVYBUIAZvWt6zW9YtWYxNZ7JhaLTE5hWaxaMS8r6WcHPDb/AP8AFE+9dbM6U/N+Wv2PY9n9Z7Txe980eP8Al5Pr+k9n5Pd+Wf8AuH4bvcIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxE2mIrGbTOIj5ZCImZxD0fg+OjjeO09GYj3SfhalvltP5dj53NfaXvuzukjpeCKfr+vq+9x2fQIc1huGFlW6spVlyVZSpLkqpKsuSqkqS3CsqS3CMNQhACoAQA/L6T6Pvjo/v9PGZnRtMeWO67Oz76dVSf5uXrqbdPeP5PIXtnjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACewRPg9a4WO82w83p7MLWjue86P8inpH7PpmHPeHXEsTDlvCzLmtCyOa0CwwtCJahhaENQzmENxLOVJbiVJhDcKqtZVQsSjCFiQVCAAHy8r3eN3Uf6VvVLfpvzq+sMef8AKt6S8Xr8WPI95Pi8JHgqEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE9khL1zhI7zbDzensw2mO6Huejn4FPSH1WhheHXDjmHLeF2JhzWqnKYc1oSYc9oFhhMIahlMIahnMIluGcwq3Eq4QuVVcNRKELEowGQMoDKcD5uTnvduvqreprwR8Wvqx54+Fb0eNV+LHke7nxeEjwVCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACeyQev8ACR3l2Hm+n7MOrHuw9t0c/wDj09IfVaGFodkS45hz3qvEsTDmvVZly2qlHPaqVYTVAxmBqGUwiWolTCstRKkwhrKuELEq4RhYlGEYXKMGDJhBkwl83Jz3v3P1VvU26ePi19WXP+Vb0eN1vXEfCr973Mx3vAxPcvWr86PvRiU5hOvX51fvTiU5hYtE9lo+8xKMqhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPYD2Hgo7ybDzfT9mHdEe7D2nST8CnpD7LQxtDriXHMMLVXiXHMOa1V4ljDmtVZMOe1Uo57VBjaosMZhC5ZzAsSpMIw1EqYQ1lXCDKMIXJgMowYMmDCWxMYmMxPgTHd3wYz4uH3DQ/c6X9EL7385V/Cp5Qk6Gh+50/6ITvf6p+6fwqeUMToaH7nT/ohbe/nP3T+DT6YcWrtNreMX22jaPp04WryckT3Wknp+K3dNY+z8/c9H+K14nOz06zPhp8Gf7Orj63qK/xObk7L6S/jSP6Pxt70P0rfC2W5tSfmakZiftd/F2pbw5I+z5vP/8Anqz38Nsevf8A7de3/E73YZncaX/j/eV7tX0uLqeLl+We98Xqez+o6bv5K93nHg+Fu4QAAAAAAAAAAAAAAAAAAAAAAAAAAAACeyUSPZOC/UfH+bafsw+pWPch7HpJ+BT0h9cwytV1xLEwwtVeJYmHNaq8SxMOe1V2Jhz2qmGXPaqRhaqRjNQZzVAzmBrKkwgyrMCxKuELkwGUYEyjAkymIThJlODCTKcJYmVohaIZmVsLMTK8QmGJWiFmLYmJieyWkQtjLr/LdHNDcRbU2cRoavzY+LP2eB9Hg6u9e6/fD4XXdhcXNE24fdt/b/TqO52+ttdadLcac0vHgl9Wt62jNXkebh5OG805IxLiWZAAAAAAAAAAAAAAAAAAAAAAAAAAAJPZIPZuBjvHx/m2n7MPrUj3Ieu6WfgU9IfZMK2h1RLMwwtVpEsTDC1V4liYc9qrxLEw57VWZw57VWyzhjaqUwwmoMpqDOagzmoZU1FyrMBlGAyjAmU6mCZMJTKdRmZThLMythZmVoqliV4hMMyvFVmZheKpSYaxCXw8lxmhyOj7nrV+FHxbx21dHFa1JzDj63ouLq6a3jv/AEn9YdF5DYa/H7mdDXju9tbR2Wj5YfTpeLxmHhOr6Pk6Xk/Dv9/N8q7lAAAAAAAAAAAAAAAAAAAAAAAAAASeySR7PwH6j4/zbT9mH2uOPh1eq6a3waekPumETDqiWZhjarSJYmGNqrxLEwwtVeJYmHPaq+WZhhaicszDG1V8szDC1E5TDKapMMpqIzmqRSagpqIahlGomUaiTJqkTqnCSnUYlfVZJW1GZXiq0JMLxVLMtIqlMNIqZMNYqjL4uW4zS5LazpXjF47unf5s/k3481lw9f0dOs4ppbxjwl57uNHU2+tqaOtXq6mnbq2h1vA8nHbivNLeMOMUAAAAAAAAAAAAAAAAAAAAAAAAAJ7JB7NwH6j4/wA20/Zh93ij4dXpunn4VPSH3yTDpiWZZzDWJZljNV4lmYZTVeJYmGFqrxLMwwtRaJZmGNqL5ZmGNqLRLOGNqJymGU0SjOaJyik0ElSaJEaCI1SI1ENUwkp0GcrapSVtUotFRJheKmUwvFU5MNIoZMNIojJhrFEZXHcaRVWbOsdM+MjU0I5DRr8PTxGrjw18E/Z6msQ87230m1Px6x3x4+n+v2dOS8wAAAAAAAAAAAAAAAAAAAAAAAAAT2SD2XgP1Hx/m2n7MPQcMfCr6Q9D08/Dr6PvWmHTEjOYXiyM5q0izMwymrSLMzDG1V4szMMbVXiWZhlai0SzMMZotEpMMpotlmYZTxrRLPVZzROUmFJ40wmFNEphWaJRXQTBqkmDUSYTolnCdUmFtDKYWihkw0ihlMLxQydVpFVcr1WkURlYq0iiJsdVpFVJsmrpV1tK+nqRmt4msx9C8UZ3xaJrbwl5ZyG1tsd9r7W3bpXmvljtj+2GUxiXhefinh5Lcc/p/wBj+z50MgAAAAAAAAAAAAAAAAAAAAAAAEnskHsnAT3k2Hm2n7MPR8EfBr6Q+5w29yH6ESvMOiLLlSYaRKKTC8SjKatIlJZzVeJTDK1V4skwymi8SxhlNF4lJhlNExZmYZzRfZnCk0TlMM5onKTCk0TlJhXRbKYRoZTCPw05TBoZTCdE5MJ0MphbQyYW0NjC8URsnVXiiMrheKK7GGkURNl6rSKKTYw0iik2MLxVSbOjdPNp7nv9DdVjEa1Orby1/wCvU5+euJiXnO1uPHJF4/WP2dYYPlAAAAAAAAAAAAAAAAAAAAAAAAE9gPYOCnvLsPN6ezD0vTx8GnpD6vFb3IfoxLWYbxZVJhpFhSYaRYUmrSLCk1XiyM5q0iyYZzVeLJMM5ovFkwzmi0WZ6rOaLbM4ZzRbZMKzRMWSYUmidkmFZonZMK6J2SYNE5SYNDYwaJ2TC2iNjCdDZMLRQ2XC8UV2MLRRGxhpFFdjC8VVm5heKqTcXirObotFWc3da6d6UW4jT1fDpa1funuMOqr7mXzO0ve4s/zdCcD4gAAAAAAAAAAAAAAAAAAAAAAAAD13gp7y7Dzensw9R08fBp6Q76W92H6MS1w2izUSrhpFlyrhpFhTC8WFJhpFhSarxYUmq8WRSarxZJZzVeLIrNFosmGc0TFkwrovFkmFNE7JMI0TsmEaJ2SYRonZMGiNjCdDYwamxhaKI2MLao2TCYojdcL6I3TC8VUm4tqpN0Xiqk3SYWwzm7Ep1Um78PplET0d3U/JbTn/AJ1Y9TWPwpcfVznil50+S+MAAAAAAAAAAAAAAAAAAAAAAAAT2A9a4Ke82x83p7MPVdN+TT0h0Vnuh+hFmuGsWbiUYaRZcomF4ssSrhpFlyrMNIsKYXiyqzVeLIpNV4sKzVaLIpNV9kVmiYuKTRbZEaJ2EaLbM4V0TuTBobIjQ3TCdDcwnQ3E6K7onQ3FoorNxbVSbotqrNxaKqTdmVsKTdiZThnN2LSYUm78LpjfHR/cx862nH/Os/g5+r7uGXL1F/hy89fGfOAAAAAAAAAAAAAAAAAAAAAAAAJ7AercHPejZfUU9mHq+m/Jp6QvEv0IltheLNRJheLNRKMNIs1Eq4XiyxKMLxZcqzDSLrlGq0WFZqvFxWarRcV1X3FNU7ojVbcRqtuiNU7iNTdJNE7Jg0Nw0RuhqbidEbomKKzcTqrN0W1Vm6LaqTdJnCdVZuxMmFN2LSYZzdxXsYUmzrPTbWxxulpfP1Yn7u64OvnHHEOfmtmMOlPkuYAAAAAAAAAAAAAAAAAAAAAAAAnsB6jw1scTs/qKeqHq+m/Jp6QjL9CtnQmLNxYWizUWF4s3FkYXiyxKMLxdcowtFlyrheLrlEwvuZRqtFjKNVtzKuq25lE1TuZV1W3DU3Mo1TumTU3SZNTdDU3DVG6J1V3E6o3SU6qzdE6qzdmZMKzdi0pwpN2JlGFZu4r2RhTZxXshXZ0npjuo1eRpoVnuaNO75Z7vqw+N1988kV8mN5y/AcKgAAAAAAAAAAAAAAAAAAAAAAAAD0zhrd6tn9TT1Q9X035NPSGMz3vvizoTlyRZK0S3EiYlqLC8WWLGFos3lGFosZRhbZYlGF4suTC25lGE7mUYTuuUYW3MowmLmTCdzJqbpk1NzKMG6ZMI3MpwjdMmEbJMmETdJlOFZszMmEbsTZGFd2LWMKzZx2siVZs4b2VlXL5tzuKaGjfV1J+DSuZZclopWbSjLznc69tzuNXXv8bUtNpecvab2m0/qq4lQAAAAAAAAAAAAAAAAAAAAAAAAnsB6NxFscZtPqa+p6rpvyaekOaZ75foVs6TLkiUpy3EpWy3EiYlYkWy1FhOV6wtssSjC2y5MJ3XKMJ2MmE7mUYW2XJg3MmDYyYTumUYNzJhG5kwbpkwbplOFd0myME3ZmTCNmZsK7sTZCNnHayso2cN7qq5cN7qyZdW6Vcj1sbHSn+bVx/aHyev5/8Ajj+qYdbfLSAAAAAAAAAAAAAAAAAAAAAAAAAT2A9B4q3e3a/VV9T1PTfk09Iclvml99bOmFcuWtlk5biyU5biyU5biyU5WJFtlyJ2aiRMWMidlyjCdjrGE7LkwnYyYNjJg2MowbnWMG51jBsnWMGydYwjZOsg2ZmRGzM2QjZibIRlx2uqZcVrqyjLivdSTL8rmuTrsNDMTnWv3KV/GXJ1XURw1/mmIy6Te9tS9r3mbWtOZmfDL4EzM98+LVEAAAAAAAAAAAAAAAAAAAAAAAAAADvnF2737b6qvqem6afhU9Icd/ml91bOqJVy5K2WyhyVssnLkiyYMtxZOU5aiyU5a6wnK5SZMidlyJyuROTrINlyYTkyGxkMp1gymQ2OshGyTYMszZBlmbIMsTZCMsWurJlxWuiTLivdSZMvzOV5XS2Gn3fhatvi0j8focfU9VXhr/NasTLpu519Xc69tbWvNr2nw+D6IfB5L2vbazaIw4lEgAAAAAAAAAAAAAAAAAAAAAAAAAAO68Zb/wBHb/V19T0nTz8KvpDiv80vurZ0RKjlrdeJHJFl4kclbLDcWSNRZI3FkpysWSZaiYE5XrCcmQyZDJ1hOTrBk6yDJ1gyk2DLM2QZSbIMszZBlibIyZYtdEyjLjtdSZS4dbVrp1m+petKx2zacQzteKxmZTDrvJdIqxE02Hwp/e2juR5IfK5+0I+Xi+7avH+suu3vfUvN9S1rXt3Zm092XypmbTmfFqygAAAAAAAAAAAAAAAAAAAAAAAAAAAAdn2O/wBrTa6Nb7nSratIiYm8RjuPucPUcUUrG0OW1LZnufXXk9lH/wBeh6SG8dTxfVH3U0t5OWOU2P8AGbf0kLx1PD9cfdGlvJyRy3H/AMdtvSwvHVcP1R9zS3k3HL8d/Hbb0tU+1cH1x90aX8m68xx38ftvS1W9r4Prj7n4d/JqOZ43xhtfSwtHVcH1waX8mo5njPGG19LU9r4Prg0v5LHNcZ4w2vpap9r4Prj7ml/Jf01xnjHa+mqn2vg+uPunS/kv6a4zxjtfTVPauD64+5pbycd+b42I/x2hP+22fUzt1vBHjeDS3k+LW6ScfT4l76k/y0mPXhhftLgjwnK8cVpfmbrpPrX7m10a0/mvOZ+5xcnalrfJXHqvHDEeL8bc7vcbq3W3GtbUn6ez7nz+Tmvyzm85axEQ4WaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = `https://wa.me/5527981359051?text=${encodeURIComponent(
  "Olá, quero saber mais sobre a revenda",
)}`;

const links = [
  {
    label: "REVENDA LOVABLE ILIMITADO",
    description: "Comece ganhar dinheiro agora",
    href: "https://hyrolovable.lovable.app/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    highlight: true,
  },
  {
    label: "SUPORTE",
    description: "Fale conosco no WhatsApp",
    href: WHATSAPP_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
      </svg>
    ),
    highlight: false,
  },
];

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background px-4 py-12 sm:py-16">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-glow-orange/25 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-glow-blue/20 blur-[110px]" />
        <div className="absolute right-1/4 top-1/2 h-56 w-56 rounded-full bg-glow-pink/15 blur-[100px]" />
      </div>

      <main className="relative z-10 flex w-full max-w-md flex-col items-center animate-fade-up">
        {/* Logo */}
        <div className="rounded-3xl bg-gradient-to-br from-glow-orange via-glow-pink to-glow-blue p-[2px] shadow-logo">
          <div className="overflow-hidden rounded-[calc(1.5rem-2px)] bg-background">
            <LogoImage />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-center text-2xl font-extrabold tracking-[0.18em] text-foreground sm:text-3xl">
          LOVABLE{" "}
          <span className="bg-gradient-to-r from-glow-orange via-glow-pink to-glow-blue bg-clip-text text-transparent">
            INFINITO
          </span>
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Acesso ilimitado • Revenda oficial
        </p>

        {/* Divider */}
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-glow-pink/60 to-transparent" />

        {/* Links */}
        <nav className="mt-8 flex w-full flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.highlight
                  ? "group relative flex items-center gap-4 rounded-2xl p-[2px] gradient-border-animated shadow-btn-glow transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  : "group flex items-center gap-4 rounded-2xl border border-border bg-card p-[2px] transition-all duration-200 hover:-translate-y-0.5 hover:border-glow-pink/40 active:translate-y-0"
              }
            >
              <span className="flex w-full items-center gap-4 rounded-[calc(1rem-1px)] bg-card/95 px-5 py-4 backdrop-blur">
                <span
                  className={
                    link.highlight
                      ? "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-glow-orange to-glow-pink text-primary-foreground"
                      : "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-glow-green"
                  }
                >
                  {link.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold tracking-wide text-foreground">
                    {link.label}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {link.description}
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Lovable Infinito
        </footer>
      </main>
    </div>
  );
}

function LogoImage() {
  return (
    <img
      src={LOGO_BASE64}
      alt="Logo Lovable Infinito"
      className="h-24 w-24 object-cover sm:h-28 sm:w-28"
      decoding="async"
      fetchPriority="high"
    />
  );
}
