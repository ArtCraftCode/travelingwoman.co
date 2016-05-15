require_relative 'sizes'

module Pattern
  def self.find(label)
    size = PatternData.select { |data| data[:label] == label }
    return Size.new(size.first)
  end

  class Size
    attr_reader :needle, :gauge_4_inch, :gauge_4_row, :inc_stitch, :inc_multiple, :lace_a, :lace_b, :depth, :wingspan, :yards, :yarn_weight, :label

    def initialize(options)
      @needle = options[:needle]
      @gauge_4_inch = options[:gauge_4_inch]
      @gauge_4_row = options[:gauge_4_row]
      @inc_stitch = options[:inc_stitch]
      @inc_multiple = options[:inc_multiple]
      @lace_a = options[:lace_a]
      @lace_b = options[:lace_b] || 1
      @depth = options[:depth]
      @wingspan = options[:wingspan]
      @yards = options[:yards]
      @yarn_weight = options[:yarn_weight]
      @label = options[:label]
    end

    def to_cm(integer)
      (integer * 2.54).round(0)
    end

    def to_m(yd)
      (yd * 0.9144).round(0)
    end
  end
end
