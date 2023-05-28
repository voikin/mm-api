export declare class MailService {
    private transporter;
    constructor();
    sendActivationMail(to: string, link: string): Promise<any>;
}
