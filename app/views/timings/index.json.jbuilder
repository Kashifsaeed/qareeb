json.array!(@timings) do |timing|
  json.extract! timing, :id
  json.url timing_url(timing, format: :json)
end
