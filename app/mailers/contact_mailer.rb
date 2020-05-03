class ContactMailer < ApplicationMailer

  def contact_message(contact)
    @contact = contact
    mail to: "contact@mlight.com", subject: "New message from M-Light.com"
  end

end
