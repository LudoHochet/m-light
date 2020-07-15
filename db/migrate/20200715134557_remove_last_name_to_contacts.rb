class RemoveLastNameToContacts < ActiveRecord::Migration[6.0]
  def change
    remove_columns :contacts, :last_name
  end
end
