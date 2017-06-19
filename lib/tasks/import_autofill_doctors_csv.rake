# $ rake import_autofill_doctors_csv:create_autofill_doctors 
require 'csv'
namespace :import_autofill_doctors_csv do
  desc 'Import doctor autofill data from csv file'
  task :create_autofill_doctors => :environment do
    csv_text = File.read(Rails.root.join('lib/assets/actual.csv'))
    csv = CSV.parse(csv_text, :headers => true)
    csv.each do |row|
      data = row.to_hash.slice("pmdc_id", "name") 
      unless AutofillDoctor.find_by_pmdc_id(data['pmdc_id'])
        AutofillDoctor.create!(data)
      end
    end
  end
end
