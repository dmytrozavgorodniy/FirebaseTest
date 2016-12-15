/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@import Firebase;

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Preapre FIR before creating window
  [FIRApp configure];
  
  // Disable Firebase Analytics by default
  [[FIRAnalyticsConfiguration sharedInstance] setAnalyticsCollectionEnabled:NO];

  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"FirebaseTest"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  return YES;
}

- (void)application:(UIApplication *)application handleEventsForBackgroundURLSession:(NSString *)identifier completionHandler:(void (^)())completionHandler {
  [FIRAnalytics handleEventsForBackgroundURLSession:identifier completionHandler:completionHandler];
}

//(on iOS 9.0 and above)
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  [FIRAnalytics handleOpenURL:url];
  
  // TODO: Think about return value
  return YES;
}

// (on iOS 8.x and below)
- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url {
  [FIRAnalytics handleOpenURL:url];
  
  // TODO: Think about return value
  return YES;
}

// (on iOS 9.0 and above)
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler {
  [FIRAnalytics handleUserActivity:userActivity];
  
  // TODO: Think about return value
  return YES;
}

@end
