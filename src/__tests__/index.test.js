import { describe, expect, it } from 'vitest'
import camelCaseToSnakeCase from '..'

describe('Tests', () => {
  it('Function should exist', () => {
    expect(camelCaseToSnakeCase).toBeDefined()
  })

  it('Function should return i_want_to_be_the_very_best', () => {
    expect(camelCaseToSnakeCase('iWantToBeTheVeryBest')).toEqual('i_want_to_be_the_very_best')
  });
  it('Function should return like_no_one_ever_was', () => {
    expect(camelCaseToSnakeCase('likeNoOneEverWas')).toEqual('like_no_one_ever_was')
  });
  it('Function should return to_catch_them_is_my_real_test', () => {
    expect(camelCaseToSnakeCase('toCatchThemIsMyRealTest')).toEqual('to_catch_them_is_my_real_test')
  });
  it('Function should return to_train_them_is_my_cause', () => {
    expect(camelCaseToSnakeCase('toTrainThemIsMyCause')).toEqual('to_train_them_is_my_cause')
  });
  it('Function should return i_will_travel_across_the_land', () => {
    expect(camelCaseToSnakeCase('iWillTravelAcrossTheLand')).toEqual('i_will_travel_across_the_land')
  });

  it('Function should return searching_far_and_wide', () => {
    expect(camelCaseToSnakeCase('searchingFarAndWide')).toEqual('searching_far_and_wide')
  });

  it('Function should return each_pokemon_to_understand', () => {
    expect(camelCaseToSnakeCase('eachPokemonToUnderstand')).toEqual('each_pokemon_to_understand')
  });
  it('Function should return the_power_thats_inside', () => {
    expect(camelCaseToSnakeCase('thePowerThatsInside')).toEqual('the_power_thats_inside')
  });








})