class Plant < ApplicationRecord
  belongs_to :species

  def species_attributes=(name)
    self.species = Species.find_or_create_by(name: name)
  end
end
