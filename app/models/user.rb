class User < ApplicationRecord
  has_many :sentences
  has_many :stories
  has_many :comments
  has_many :votes
  has_many :notifications
  
  def self.create_with_omniauth(auth)
    create! do |user|
      user.name = auth["info"]["name"]
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.token = auth["credentials"]["token"]
    end
  end
end
