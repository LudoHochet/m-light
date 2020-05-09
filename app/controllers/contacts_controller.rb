class ContactsController < ApplicationController
  skip_before_action :authenticate_user!

  def create
    @contact = Contact.new(params_contacts)
    if @contact.save
      ContactMailer.contact_message(@contact).deliver_now
      redirect_to root_path, notice: "thanks for your message"
    else
      render 'pages/contact', notice: "Please complete the form"
    end
  end

  private

  def params_contacts
    params.require(:contact).permit(:first_name, :last_name, :email, :message )
  end
end
