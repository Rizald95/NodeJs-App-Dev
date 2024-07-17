//overriding
//fitur ynag memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah di definisikan pada sub classnya

class MailService {
    constructor(sender) {
        this.sender = sender;
    }
}

class WhatsAppService extends MailService {
    //overriding constructor
    constructor(sender, isBusiness) {
        super(sender);

        this.isBusiness = isBusiness;
    }
}