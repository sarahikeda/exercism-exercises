module BookKeeping
  VERSION = 3
end

class Hamming
  include BookKeeping
  def self.compute(strand_1, strand_2)
    i = 0
    if strand_1.length != strand_2.length
      raise(ArgumentError, "Strands must be same size.")
    elsif strand_1 == strand_2
      i
    else
      char_strand_2 = strand_2.split("")
      strand_1.split("").each_with_index do |char,index|
        if char != char_strand_2[index]
          i += 1
        end
      end
      i
    end
  end
end
