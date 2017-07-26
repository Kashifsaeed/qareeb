# $ rake import_autofill_doctors_csv:create_autofill_doctors 
require 'csv'
namespace :import_autofill_doctors_csv do
  desc 'Import doctor autofill data from csv file'
  task :create_autofill_doctors => :environment do
    csv_text = File.read(Rails.root.join('lib/assets/actual.csv'))
    puts "Finished: Reading File"
    csv = CSV.parse(csv_text, :headers => true)
    puts "Finished: Parsing File"
    current = 0
    total = csv.size - 2
    step = total / 100
    puts "Begin: Importing " + total + " Records"
    progressbar = ProgressBar.create
    csv.each do |row|
      data = row.to_hash.slice("pmdc_id", "name") 
      unless AutofillDoctor.find_by_pmdc_id(data['pmdc_id'])
        AutofillDoctor.create!(data)
      end
      current = current + 1
      if current%step == 0
        progressbar.increment
      end
    end
    puts "Finished: Importing Data"
    puts "Rake Task Completed"
  end
end
