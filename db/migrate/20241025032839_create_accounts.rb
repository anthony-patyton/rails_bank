class CreateAccounts < ActiveRecord::Migration[7.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.float :balance
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
