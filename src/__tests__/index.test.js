import { describe, expect, it } from 'vitest'
import snakeCaseToCamelCase from '..'

describe('Tests', () => {
  it('Function should exist', () => {
    expect(snakeCaseToCamelCase).toBeDefined()
  })

  it('Function should return blaBla', () => {
    expect(snakeCaseToCamelCase('bla_bla')).toEqual('blaBla');
  });
  it('Function should return nicoAndEdBananaOnBread', () => {
    expect(snakeCaseToCamelCase('nico_and_ed_banana_on_bread')).toEqual('nicoAndEdBananaOnBread');
  });
  it('Function should return theInternetIsReallyReallyGreat', () => {
    expect(snakeCaseToCamelCase('the_internet_is_really_really_great')).toEqual('theInternetIsReallyReallyGreat');
  });
  it('Function should return iHaveAFastConnectionAndSoIDontHaveToWaaaiiiit', () => {
    expect(snakeCaseToCamelCase('i_have_a_fast_connection_and_so_i_dont_have_to_waaaiiiit')).toEqual('iHaveAFastConnectionAndSoIDontHaveToWaaaiiiit');
  });
  it('Function should return theresAlwaysSomeNewSite', () => {
    expect(snakeCaseToCamelCase('theres_always_some_new_site')).toEqual('theresAlwaysSomeNewSite');
  });
  it('Function should return iBrowseAllDayAndNight', () => {
    expect(snakeCaseToCamelCase('i_browse_all_day_and_night')).toEqual('iBrowseAllDayAndNight');
  });
  it('Function should return itsLikeImSurfingAtTheSpeedOfLiiiiiiight', () => {
    expect(snakeCaseToCamelCase('its_like_im_surfing_at_the_speed_of_liiiiiiight')).toEqual('itsLikeImSurfingAtTheSpeedOfLiiiiiiight');
  });
  it('Function should return treckyPlease', () => {
    expect(snakeCaseToCamelCase('trecky_please')).toEqual('treckyPlease');
  })

})