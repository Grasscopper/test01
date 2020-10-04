class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name, null: false
      t.string :talent, null: false

      t.timestamps null: false
    end
  end
end
