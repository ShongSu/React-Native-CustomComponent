//
//  MyObjcClass.m
//  CustomComponent
//
//  Created by Aetonix on 2017-02-06.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "MyObjcClass.h"

@implementation MyObjcClass

// The React Native bridge needs to know our module
RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  return @{@"greeting": @"Welcome to Custom Component Demo!"};
}

RCT_EXPORT_METHOD(squareMe:(NSString *)number:(RCTResponseSenderBlock)callback) {
  int num = [number intValue];
  callback(@[[NSNull null], [NSNumber numberWithInt:(num*num)]]);
}


- (NSInteger)squareMe:(NSString *)number {
  int num = [number intValue];
  return num*num;
}

@end
