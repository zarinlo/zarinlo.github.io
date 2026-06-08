# frozen_string_literal: true

# The static codelabs/ folder can win over the generated listing page on deploy,
# leaving /codelabs/ without an index.html. Re-write it after the full build.
Jekyll::Hooks.register :site, :post_write do |site|
  page = site.pages.find do |p|
    permalink = p.data["permalink"].to_s
    permalink == "/codelabs/" || permalink == "/codelabs/index.html"
  end

  next unless page&.output

  dest = File.join(site.dest, "codelabs", "index.html")
  FileUtils.mkdir_p(File.dirname(dest))
  File.write(dest, page.output)
end
