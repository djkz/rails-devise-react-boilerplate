if Rails.env.development?
  # See tasks/linters.rake

  task :bundle_audit do
    puts "Running security audit on gems (bundle_audit)".green
    Rake::Task["bundle_audit"].invoke
  end

  task :security_audit do
    puts "Running security audit on code (brakeman)".green
    Rake::Task["brakeman:run"].invoke("tmp/brakeman-report.html")
  end

  namespace :ci do
    desc "Run all audits and tests"
    task all: [:environment, :lint, :spec, :bundle_audit, :security_audit] do
      begin
        puts "PASSED".green
        puts ""
      rescue Exception => e
        puts "#{e}"
        puts "FAILED".red
        puts ""
        raise(e)
      end
    end
  end

  task :ci do
    Rake::Task["ci:all"].invoke
  end

  task(:default).clear
  task default: [:ci]
end
