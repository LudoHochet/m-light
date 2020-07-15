class ChangeFirstNameToNameInContacts < ActiveRecord::Migration[6.0]
  def change
    rename_column :contacts, :first_name, :name
  end
end
