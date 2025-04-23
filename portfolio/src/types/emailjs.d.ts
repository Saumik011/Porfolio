declare module '@emailjs/browser' {
  export function init(userId: string): void;
  export function send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, any>,
    userId: string
  ): Promise<any>;
  export function sendForm(
    serviceId: string,
    templateId: string,
    form: HTMLFormElement,
    userId: string
  ): Promise<any>;
} 